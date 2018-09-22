export default class ArticleController {
  constructor (db) {
    this.db = db
  }

  createArticle (data) {
    console.log('Creating article with data', data)
  }

  getArticle (id) {
    console.log('Retriving article id: ', id)
  }
}
