package Task3;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
public class Voice {
    private String message;

    public Voice(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
