import Webpack._
name := """electriTransation"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs,

  "com.itextpdf" % "itextpdf" % "5.5.10",
  "com.typesafe.play" % "play-mailer_2.11" % "5.0.0"
)

offline := false

//activator dist
lazy val webpack = TaskKey[Unit]("Run webpack")

def runWebpack(file: File)= {
	Process("webpack", file) !
}

webpack :={
	if(runWebpack(baseDirectory.value) != 0) throw new Exception("Something running webpack error")
}

dist <<= dist dependsOn webpack
stage <<= stage dependsOn webpack

//activator run
PlayKeys.playRunHooks <+= baseDirectory.map(base => Webpack(base))

excludeFilter in (Assets) := "assets"

