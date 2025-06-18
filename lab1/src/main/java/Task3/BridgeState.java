package Task3;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class BridgeState {
    private int structuralIntegrity;

    public BridgeState() {
        this.structuralIntegrity = 100;
    }

    // Уменьшаем целостность моста
    public void decreaseIntegrity(int value) {
        this.structuralIntegrity -= value;
        if (this.structuralIntegrity < 0) {
            this.structuralIntegrity = 0;
        }
    }

    public int getStructuralIntegrity() {
        return structuralIntegrity;
    }

    public boolean isBridgeSafe() {
        return structuralIntegrity > 50;
    }

}
