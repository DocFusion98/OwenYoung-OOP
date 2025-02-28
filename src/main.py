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
        n = random.randint(0, len(dictionary.names) - 1)
        name = dictionary.names[n]
        return t.render(NAME = name)

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
        p1 = dictionary.pfps[i]
        i = random.randint(0, len(dictionary.pfps) - 1)
        p2 = dictionary.pfps[i]
        while p1 == p2:
            i = random.randint(0, 2)
            p2 = dictionary.pfps[i]
        
        
        return t.render(DAYS = d, VIEWS = v, PFP1 = p1, PFP2 = p2)

app = App()
cherrypy.quickstart(app, "/",
    {
        "/images" : {
            "tools.staticdir.on" : True,
            "tools.staticdir.dir" : f"{os.path.abspath(os.path.dirname(__file__))}/../images"
        },

        "/html":{
            "tools.staticdir.on" : True,
            "tools.staticdir.dir" : f"{os.path.abspath(os.path.dirname(__file__))}/../html"
        }
    }


)