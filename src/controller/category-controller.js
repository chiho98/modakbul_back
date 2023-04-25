const CategoryService = require('../service/category-service');

const createCategory = async (req, res) => {
    const categoryInfo = req.body;
    try {
        const category = await CategoryService.addCategory(categoryInfo);

        res.status(200).json({
            message: '카테고리 추가 성공!',
            categories: category
          });
    } catch (err) {
        console.log(err);
        res.status(400).send(`${err}`);
    }  
};

const getAllCategory = async (req, res) => {
    try {
        const categories = await CategoryService.findAll();
        res.status(200).json({
            message: `모든 카테고리 조회 성공!`,
            categories: categories
        });
    } catch (err) {
        console.log(err);
        res.status(400).send(`${err}`);
    }
};

const findCategoryName = async (req, res) => {
    const {name} = req.params;
    try {
        const category = await CategoryService.findCategory(name);
        res.status(200).json({
            message: `major 카테고리 조회 성공!`,
            categories: category
        });
    } catch (err) {
        console.log(err);
        res.status(400).send(`${err}`);
    }
};

const deleteCategory = async (req, res) => {
    const {name} = req.params;
    try {
        const deleteCategory = await CategoryService.deleteCategory(name);
        res.status(200).json({
            message: `카테고리 삭제 성공!`,
            categories: deleteCategory
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(`${err}`);
    }
};

const updateCategory = async (req, res) => {
    try {
      const {name} = req.params;
      const newName = req.body;
      const updatedCategory = await CategoryService.updateCategoryName(name, newName);
      res.status(200).json({
        message: `major 카테고리 수정 성공!`,
        categories: updatedCategory
    });
    } catch (err) {
      console.log(err);
      res.status(500).send(`${err}`);
    }
  };

const categoryController = {
    createCategory,
    getAllCategory,
    findCategoryName,
    updateCategory,
    deleteCategory,
}


module.exports = categoryController;