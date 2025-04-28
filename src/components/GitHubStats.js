import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GitHubStats = () => {
  const [stats, setStats] = useState({
    commits: 0,
    additions: 0,
    deletions: 0,
    commitHistory: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/github/stats');
        setStats(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors de la récupération des statistiques');
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const chartData = {
    labels: stats.commitHistory.map(commit => new Date(commit.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Ajouts',
        data: stats.commitHistory.map(commit => commit.additions),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Suppressions',
        data: stats.commitHistory.map(commit => commit.deletions),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Historique des modifications'
      }
    }
  };

  if (loading) return <div className="text-center p-4">Chargement...</div>;
  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Statistiques GitHub</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total des commits</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.commits}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Lignes ajoutées</h3>
          <p className="text-3xl font-bold text-green-600">+{stats.additions}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Lignes supprimées</h3>
          <p className="text-3xl font-bold text-red-600">-{stats.deletions}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default GitHubStats; 