
package Task2;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class TestBTree {

    @Test
    @DisplayName("Проверка вставки и поиска ключей")
    void testInsertAndSearch() {
        BTree tree = new BTree();
        int[] keys = {10, 20, 5, 6, 12, 30, 7, 17};

        for (int key : keys) {
            tree.insert(key);
        }

        for (int key : keys) {
            assertTrue(tree.search(key), "Ключ " + key + " должен быть найден.");
        }

        assertFalse(tree.search(100), "Ключ 100 не должен быть найден.");
    }

    @Test
    @DisplayName("Проверка поиска в пустом дереве")
    void testEmptyTreeSearch() {
        BTree tree = new BTree();
        assertFalse(tree.search(10), "В пустом дереве поиск должен вернуть false.");
    }
}
