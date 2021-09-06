package rpgregor.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rpgregor.backend.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}
