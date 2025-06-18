package Task3;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


public class Sky {
    private String condition;

    public Sky(String initialCondition) {
        this.condition = initialCondition;
    }

    public void changeCondition(String newCondition) {
        this.condition = newCondition;
    }

    public String getCondition() {
        return condition;
    }
}


