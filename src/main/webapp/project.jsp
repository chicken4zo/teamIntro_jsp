<%--
  Created by IntelliJ IDEA.
  User: heewonseo
  Date: 2021/09/05
  Time: 23:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Projects</title>
    <link rel="stylesheet" href="css/project.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Jua&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="image/favicon.ico" type="image/x-icon">
    <link rel="icon" href="image/favicon.ico" type="image/x-icon">
</head>
<body>
<jsp:include page="nav.jsp"></jsp:include>
<div class="container">
    <h1>OUR PROJECTS</h1>
</div>
<div class="container videos">
    <div class="row-cols-auto">
        <h2>1</h2>
<video src="https://raw.githubusercontent.com/chicken4zo/files/master/pj1.mp4" muted loop></video>
        <section>
            <div class="grid-12 project project-right">
                <div class="box">
                    <div class="overlay"></div>
                </div>
                <div class="project-info">
                    <p class="small-title">HTML // Javascript // Bootstrap</p>
                    <h4>Video & Audio</h4>
            </div>
            </div>
        </section>

        <h2>2</h2>
    <video src="https://raw.githubusercontent.com/chicken4zo/files/master/pj2.mp4" muted loop></video>
        <section>
            <div class="grid-12 project project-right">
                <div class="box">
                    <div class="overlay"></div>
                </div>
                <div class="project-info">
                    <p class="small-title">Javascript // JSP // Bootstrap</p>
                    <h4>About Our Team</h4>
                </div>
            </div>
        </section>

        <h2>3</h2>
    <video src="https://raw.githubusercontent.com/chicken4zo/files/master/pj3.mp4" muted loop></video>
        <section>
            <div class="grid-12 project project-right">
                <div class="box">
                    <div class="overlay"></div>
                </div>
                <div class="project-info">
                    <p class="small-title">JSON // API // Bootstrap</p>
                    <h4>CCTV Map in Seoul</h4>
                </div>
            </div>
        </section>
    </div>
</div>
</body>
<script src="js/bootstrap.js"></script>
<script src="js/project.js"></script>
</html>
