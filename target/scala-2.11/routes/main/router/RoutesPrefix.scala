
// @GENERATOR:play-routes-compiler
// @SOURCE:H:/workspace/funny/conf/routes
// @DATE:Sat Mar 04 18:21:26 CST 2017


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
