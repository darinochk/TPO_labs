package Task3;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
public class Child {
    private String name;

    public Child(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
