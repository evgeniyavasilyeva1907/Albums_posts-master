import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Pie } from 'react-chartjs-2'

function Statistic(props) {
    const [chartData, setChartData] = useState({})
    const { posts, albums } = props;
    const chart = () => {
        setChartData({
            labels: [
                'posts',
                'albums'],
            datasets: [
                {
                    label: 'number',
                    data: [posts.length, albums.length],
                    backgroundColor: [
                        'rgba(75, 195, 192, 0.6)',
                        'rgba(245,7,241, 0.5)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }
    useEffect(() => {
        chart()
    },[])

    return (
        <Pie data={chartData} options={{
            responsive: true,
            title: { text: "Number", display: true },

        }} />
    )

}
const mapStateToProps = state => {
    return {
        posts: state.PostsReducer.postsList,
        albums: state.AlbumsReducer.AlbumsList
    }
}

export default connect(
    mapStateToProps,
    null)
    (withRouter(Statistic))