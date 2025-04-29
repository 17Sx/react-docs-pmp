"use client";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CommitData {
  date: string;
  message: string;
}

interface CommitHistory {
  labels: string[];
  data: number[];
}

interface CommitGraphProps {
  repoName: string;
}

export default function CommitGraph({ repoName }: CommitGraphProps) {
  const [lastCommit, setLastCommit] = useState<CommitData | null>(null);
  const [totalCommits, setTotalCommits] = useState<number | null>(null);
  const [commitHistory, setCommitHistory] = useState<CommitHistory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
        setError('Token GitHub non configuré');
        setIsLoading(false);
        return;
      }

      try {
        const [lastCommitRes, historyRes] = await Promise.all([
          fetch(`https://api.github.com/repos/17Sx/${repoName}/commits/main`, {
            headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              'Accept': 'application/vnd.github.v3+json'
            }
          }),
          fetch(`https://api.github.com/repos/17Sx/${repoName}/commits?per_page=100`, {
            headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              'Accept': 'application/vnd.github.v3+json'
            }
          })
        ]);

        if (!lastCommitRes.ok || !historyRes.ok) {
          throw new Error('Erreur lors de la récupération des données GitHub');
        }

        const [lastCommitData, historyData] = await Promise.all([
          lastCommitRes.json(),
          historyRes.json()
        ]);

        setLastCommit({
          date: new Date(lastCommitData.commit.author.date).toLocaleDateString('fr-FR'),
          message: lastCommitData.commit.message
        });

        const linkHeader = historyRes.headers.get('link');
        if (linkHeader) {
          const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/);
          if (lastPageMatch) {
            setTotalCommits(parseInt(lastPageMatch[1]));
          }
        }

        const monthlyCommits = historyData.reduce((acc: Record<string, number>, commit: { commit: { author: { date: string } } }) => {
          const date = new Date(commit.commit.author.date);
          const dayMonthYear = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
          acc[dayMonthYear] = (acc[dayMonthYear] || 0) + 1;
          return acc;
        }, {});

        setCommitHistory({
          labels: Object.keys(monthlyCommits),
          data: Object.values(monthlyCommits)
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [repoName]);

  const chartData = {
    labels: commitHistory?.labels || [],
    datasets: [
      {
        label: 'Commits par jour',
        data: commitHistory?.data || [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Historique des commits',
      },
    },
  };

  return (
    <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Statistiques des commits</h2>
      {isLoading ? (
        <div className="text-gray-600 dark:text-gray-400">
          Chargement des statistiques...
        </div>
      ) : error ? (
        <div className="text-gray-600 dark:text-gray-400">
          <p className="text-red-500">{error}</p>
          {!process.env.NEXT_PUBLIC_GITHUB_TOKEN && (
            <p className="text-sm text-red-500 mt-2">
              Pour afficher les statistiques, veuillez configurer la variable d&apos;environnement NEXT_PUBLIC_GITHUB_TOKEN
            </p>
          )}
        </div>
      ) : (
        <>
          {lastCommit && (
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              <p>Dernière mise à jour : {lastCommit.date}</p>
              <p className="text-xs">&apos;{lastCommit.message}&apos;</p>

            </div>
          )}
          {commitHistory ? (
            <div className="h-64">
              <Line data={chartData} options={chartOptions} />
            </div>
          ) : (
            <div className="text-gray-600 dark:text-gray-400">
              <p>Impossible de charger l&apos;historique des commits</p>
            </div>
          )}
        </>
      )}
    </div>
  );
} 