import React from "react";

function Home() {
  return (
    <div className="my-5">
      <h1 id="home" className="px-2">
        About This Application
      </h1>
      <img
        id="dev-image"
        src="https://avatars0.githubusercontent.com/u/54727095?s=460&u=f9f8b8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=4"
        className="my-2 px-2"
        style={{ width: "200px" }}
        alt="dev"
      />
      <p className="px-2">
        This application is a simple application that allows you to create a new
        account, login to your account, and view your profile. The idea behind
        this app is so that I can keep track of my Job Applications and their
        statuses.
      </p>
      <br></br>
      <p className="px-2">
        I am a full stack developer with a passion for continuous learning. I'm
        in the job hunting process and have found that keeping track of my job
        applications is a nightmare. This application may be overkill for this
        particular situation, but I wanted to create an application that used
        mySQL with Sequelize ORM, RESTful APIs, and React Prop Drilling + Hooks
        to refresh my knowledge on the subject. I hope you enjoy this
        application and find it useful.
      </p>
    </div>
  );
}

export default Home;
