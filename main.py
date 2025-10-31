from flask import Flask, render_template, request, url_for
app = Flask("__name__")


@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("home.html")

@app.route("/experience", methods=["GET", "POST"])
def experience():
    return render_template("experience.html")

@app.route("/education", methods=["GET", "POST"])
def education():
    return render_template("education.html")

@app.route("/skills", methods=["GET", "POST"])
def skills():
    return render_template("skills.html")

@app.route("/projects", methods=["GET", "POST"])
def projects():
    return render_template("projects.html")

@app.route("/certificates", methods=["GET", "POST"])
def certificates():
    return render_template("certificates.html")

@app.route("/about", methods=["GET", "POST"])
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.run(debug=True)
