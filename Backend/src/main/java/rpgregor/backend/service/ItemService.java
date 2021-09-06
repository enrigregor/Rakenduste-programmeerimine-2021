package rpgregor.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rpgregor.backend.model.Item;
import rpgregor.backend.repository.ItemRepository;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public void saveItem(Item item) {
        itemRepository.save(item);
    }

    public List<Item> getItem(){
        return itemRepository.findAll();
    }
}
