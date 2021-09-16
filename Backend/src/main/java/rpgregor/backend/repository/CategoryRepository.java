package rpgregor.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rpgregor.backend.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
