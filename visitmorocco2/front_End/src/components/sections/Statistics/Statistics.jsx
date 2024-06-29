

// src/pages/Statistics.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, CircularProgress, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Statistics = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/admin/statistics')
            .then((response) => {
                setStats(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching statistics:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <CircularProgress />;
    }


    return (
        <>
            <div className='text-5xl  flex justify-center p-8 m-2   '>Dashboard</div>

            <Box p={3} sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={3} sx={{ p: 2, backgroundColor: '#1976d2', color: '#fff' }}>
                            <Typography variant="h6">Users</Typography>
                            <Typography variant="h4">{stats.users}</Typography>
                            <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Since last week</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={3} sx={{ p: 2, backgroundColor: '#388e3c', color: '#fff' }}>
                            <Typography variant="h6">Activities</Typography>
                            <Typography variant="h4">{stats.activities}</Typography>
                            <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Since last week</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={3} sx={{ p: 2, backgroundColor: '#d32f2f', color: '#fff' }}>
                            <Typography variant="h6">Destinations</Typography>
                            <Typography variant="h4">{stats.destinations}</Typography>
                            <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Since last week</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={3} sx={{ p: 2, backgroundColor: '#f57c00', color: '#fff' }}>
                            <Typography variant="h6">Reservations</Typography>
                            <Typography variant="h4">{stats.reservations}</Typography>
                            <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Since last week</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ p: 2, backgroundColor: '#fff' }}>
                            <Typography variant="h6">Travel Overview</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart
                                    data={[
                                        { name: 'Jan', Destination: 40, Activity: 24 },
                                        { name: 'Feb', Destination: 30, Activity: 13 },
                                        { name: 'Mar', Destination: 20, Activity: 98 },
                                        { name: 'Apr', Destination: 27, Activity: 39 },
                                        { name: 'May', Destination: 18, Activity: 48 },
                                        { name: 'Jun', Destination: 23, Activity: 38 },
                                        { name: 'Jul', Destination: 34, Activity: 43 },
                                    ]}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="Destination" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="Activity" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 2, backgroundColor: '#fff' }}>
                            <Typography variant="h6">Used Devices</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={[
                                            { name: 'Mobile', value: 400 },
                                            { name: 'Desktop', value: 300 },
                                            { name: 'Tablet', value: 300 },
                                        ]}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        <Cell fill="#8884d8" />
                                        <Cell fill="#82ca9d" />
                                        <Cell fill="#ffc658" />
                                    </Pie>
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Statistics;
