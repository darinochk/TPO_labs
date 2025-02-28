package Task3;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestTask3 {

    private Bridge bridge;
    private Child child1;
    private Child child2;
    private Sound sound;
    private Voice voice;
    private Sky sky;
    private UnexploredArea unexploredArea;

    @BeforeEach
    void setUp() {
        bridge = new Bridge();
        child1 = new Child("Alex");
        child2 = new Child("Maria");
        bridge.addChild(child1);
        bridge.addChild(child2);

        sound = new Sound("A distant, muffled, eerie sound.");
        voice = new Voice("A mysterious voice says, 'Beware the unknown.'");

        sky = new Sky("Clear");
        unexploredArea = new UnexploredArea();
    }

    @Test
    @DisplayName("Test Bridge State Integrity After Sound")
    void testBridgeStateAfterSound() {
        System.out.println("Original Bridge State Integrity: " + bridge.getBridgeState().getStructuralIntegrity());


        Sound muffledSound = new Sound("A distant, muffled, eerie sound");
        bridge.makeSound(muffledSound);

        System.out.println("Bridge integrity after muffled sound: " + bridge.getBridgeState().getStructuralIntegrity());


        assertTrue(bridge.getBridgeState().getStructuralIntegrity() == 100, "The bridge integrity should remain 100 after a muffled sound.");
    }

    @Test
    @DisplayName("Test Sky Condition Change")
    void testSkyConditionChange() {
        System.out.println("Original Sky Condition: " + sky.getCondition());
        sky.changeCondition("Stormy");
        System.out.println("Sky condition after change: " + sky.getCondition());

        assertEquals("Stormy", sky.getCondition(), "The sky condition should be updated to Stormy.");
    }

    @Test
    @DisplayName("Test Voice Message")
    void testVoiceMessage() {
        System.out.println("Original Voice Message: " + voice.getMessage());
        assertEquals("A mysterious voice says, 'Beware the unknown.'", voice.getMessage(), "The voice message should match the expected text.");
    }

    @Test
    @DisplayName("Test Unexplored Area Description")
    void testUnexploredAreaDescription() {
        System.out.println("Original Unexplored Area Description: " + unexploredArea.getDescription());
        assertEquals("Unexplored area ahead, dangerous and unknown.", unexploredArea.getDescription(), "The unexplored area description should match the expected text.");
    }

    @Test
    @DisplayName("Test Bridge State Safety After Crashing Sounds")
    void testBridgeStateSafety() {
        System.out.println("Original Bridge State Integrity: " + bridge.getBridgeState().getStructuralIntegrity());


        Sound crashingSound1 = new Sound("A crashing noise");
        Sound crashingSound2 = new Sound("A crashing noise");
        bridge.makeSound(crashingSound1);
        bridge.makeSound(crashingSound2);
        System.out.println("Bridge integrity after series of crashing sounds: " + bridge.getBridgeState().getStructuralIntegrity());


        assertFalse(bridge.getBridgeState().isBridgeSafe(), "The bridge should not be safe after a series of dangerous sounds.");
    }



}
