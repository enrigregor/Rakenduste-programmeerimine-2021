package rpgregor.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import rpgregor.backend.model.Category;
import rpgregor.backend.service.CategoryService;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategories(){
        return categoryService.getCategory();
    }

    @PostMapping("categories")
    public String postItems(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "Kategooria edukalt lisatud!! " + category.getName();
    }

    //kodutöö: kõik tehtud asjad ka categoryga5
}
