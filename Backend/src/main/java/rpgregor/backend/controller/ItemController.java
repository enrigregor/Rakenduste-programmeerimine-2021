package rpgregor.backend.controller;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rpgregor.backend.model.Item;
import rpgregor.backend.service.ItemService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItem();
    }

    @PostMapping("items")
    public void postItems(@RequestBody Item item) {
        itemService.saveItem(item);
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItem();
    }
    @ApiOperation("API otsepunktiga, tuleb kaasa anda ID")
    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item){
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getOneItem(id);
    }

    //kodutöö: kõik tehtud asjad ka categoryga5
}
