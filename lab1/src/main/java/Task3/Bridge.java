package Task3;

import java.util.List;
import java.util.ArrayList;

public class Bridge {
    private BridgeState bridgeState;
    private List<Child> children;

    public Bridge() {
        this.bridgeState = new BridgeState();
        this.children = new ArrayList<>();
    }

    public void addChild(Child child) {
        children.add(child);
    }

    public BridgeState getBridgeState() {
        return bridgeState;
    }

    public void makeSound(Sound sound) {
        System.out.println("Sound: " + sound.getDescription());
        if (sound.getDescription().equals("A crashing noise")) {
            bridgeState.decreaseIntegrity(30);
        }

    }
}
