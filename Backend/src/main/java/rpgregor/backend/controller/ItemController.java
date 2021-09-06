package rpgregor.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import rpgregor.backend.model.Item;
import rpgregor.backend.service.ItemService;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItem();
    }

    @PostMapping("items")
    public String postItems(@RequestBody Item item){
        itemService.saveItem(item);
        return "Ese edukalt lisatud!! " + item.getName();
    }

    //kodutöö: kõik tehtud asjad ka categoryga5
}
