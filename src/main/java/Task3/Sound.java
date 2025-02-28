package Task3;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class Sound {
    private String description;

    public Sound(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
