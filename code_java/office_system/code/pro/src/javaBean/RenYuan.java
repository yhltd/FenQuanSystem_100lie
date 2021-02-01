package javaBean;

public class RenYuan {
    private int id;
    private String B;
    private String C;
    private String D;
    private String E;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getB() {
        return B;
    }

    public void setB(String b) {
        B = b;
    }

    public String getC() {
        return C;
    }

    public void setC(String c) {
        C = c;
    }

    public String getD() {
        return D;
    }

    public void setD(String d) {
        D = d;
    }

    public String getE() {
        return E;
    }

    public void setE(String e) {
        E = e;
    }

    public RenYuan(){};
    public RenYuan(int id, String b, String c, String d, String e) {
        this.id = id;
        B = b;
        C = c;
        D = d;
        E = e;
    }
}
