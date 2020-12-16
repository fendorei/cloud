provider "heroku" {

}

resource "heroku_app" "production" {
    name = ""
    region = "eu"
}