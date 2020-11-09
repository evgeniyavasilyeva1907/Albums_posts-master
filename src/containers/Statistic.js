import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Pie } from "react-chartjs-2";

function Statistic(props) {
  const [chartData, setChartData] = useState({});
  const { posts, albums } = props;

  useEffect(() => {  //TODO тут я просто убрал лишнюю функцию у тебя. Просто мне так больше нравится
    setChartData({   //твой вариант тоже рабочит, только тогда бывшую функцию chart необходимо было
      labels: ["posts", "albums"], //обернуть в useCallback. Консоль об этом подсказывала. 
      datasets: [
        {
          label: "number",
          data: [posts.length, albums.length],
          backgroundColor: ["rgba(75, 195, 192, 0.6)", "rgba(245,7,241, 0.5)"],
          borderWidth: 4,
        },
      ],
    });
  }, [posts.length, albums.length]);

  return (
    <Pie
      data={chartData}
      options={{
        responsive: true,
        title: { text: "Number", display: true },
      }}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.PostsReducer.postsList,
    albums: state.AlbumsReducer.AlbumsList,
  };
};

export default connect(mapStateToProps, null)(withRouter(Statistic));

//TODO еще забавный факт. Если не открывать посты и комменты, а сразу перейти в статистику
// У тебя в статистике все по 0 стоит. Круто, да?)

//TODO ну и в статистике можно просто каким-нибудь текстом добавить
//постов - столько, комментов - столько
