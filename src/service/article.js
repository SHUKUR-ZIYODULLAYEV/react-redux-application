import axios from "axios";

const ArticleService = {
  async getArticleList() { 
    const {data} = await axios.get('/articles');
    return data;
  }
};

export default ArticleService;