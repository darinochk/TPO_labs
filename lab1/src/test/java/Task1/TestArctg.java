package Task1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class TestArctg {

    @Test
    public void testBoundaryValues() {

        double delta = 1e-5;

        assertEquals(0.7853931633724482, Math.atan(0.99999), delta);
        assertEquals(-0.7853931633724482, Math.atan(-0.99999), delta);
        assertEquals(0.7853981633974483, Math.atan(1.0), delta);
        assertEquals(-0.7853981633974483, Math.atan(-1.0), delta);
    }

    @Test
    public void testArctgOneMinusOne() {

        double delta = 1e-5;

        assertEquals(0.7853981633974483, Math.atan(1.0), delta);

        assertEquals(-0.7853981633974483, Math.atan(-1.0), delta);
    }

    @Test
    public void testArctgCorrectValues() {

        double delta = 1e-5;

        assertEquals(0.7853931633724482, Math.atan(0.99999), delta);
        assertEquals(-0.7853931633724482, Math.atan(-0.99999), delta);
    }

    @Test
    public void testArctgWithSeries() {
        double delta = 1e-3;

        double result = Arctg.calculate(1.0, 1000);
        assertEquals(Math.atan(1.0), result, delta);

        result = Arctg.calculate(0.5, 1000);
        assertEquals(Math.atan(0.5), result, delta);
    }

    @Test
    public void testInvalidInput() {

        assertThrows(IllegalArgumentException.class, () -> Arctg.calculate(Double.NaN, 5));
        assertThrows(IllegalArgumentException.class, () -> Arctg.calculate(Double.POSITIVE_INFINITY, 5));
        assertThrows(IllegalArgumentException.class, () -> Arctg.calculate(Double.NEGATIVE_INFINITY, 5));
    }


}
