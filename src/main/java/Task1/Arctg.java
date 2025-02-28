
package Task1;

public class Arctg {

    public static double calculate(double x, int n) {
        if (Double.isNaN(x) || Double.isInfinite(x)) {
            throw new IllegalArgumentException("Invalid input for arctg: NaN or Infinity.");
        }

        double result = 0;
        double term = x;

        for (int i = 0; i < n; i++) {
            // Степенной ряд для arctg(x): сумма (-1)^n * x^(2n+1) / (2n+1)
            if (i % 2 == 0) {
                result += term / (2 * i + 1);
            } else {
                result -= term / (2 * i + 1);
            }
            term *= x * x;
        }
        return result;
    }
}
