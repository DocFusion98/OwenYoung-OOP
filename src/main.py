import cherrypy
import mako.template
import os.path
import random
import dictionary

PYPATH = os.path.dirname(__file__)

class App:
    @cherrypy.expose
    def index(self):
        t = mako.template.Template(filename=f"{PYPATH}/../html/home.html")
        return t.render()

    @cherrypy.expose
    def signup(self):
        t = mako.template.Template(filename=f"{PYPATH}/../html/signup.html")
        return t.render()
    
    @cherrypy.expose
    def posts(self):
        t = mako.template.Template(filename=f"{PYPATH}/../html/posts.html")
        d = random.randint(0, 365)
        v = random.randint(1, 10000420)
        i = random.randint(0, 2)
        i = dictionary.d[i]
        return t.render(DAYS = d, VIEWS = v, PFP = i)

app = App()
cherrypy.quickstart(app, "/",
    {
        "/images" : {
            "tools.staticdir.on" : True,
            "tools.staticdir.dir" : f"{os.path.abspath(os.path.dirname(__file__))}/../images"
        }
    }


)