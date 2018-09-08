import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

// import {Favorite} from "./models/favorite.js"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
// const modelContext = require.context("./models", true, /\.js$/)
application.load(definitionsFromContext(context))
