package javaBean;

public class RenYuan {
    private int id;
    private String B;
    private String C;
    private String D;
    private String E;
    private String renyuan_id;

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

    public String getRenyuan_id() {
        return renyuan_id;
    }

    public void setRenyuan_id(String renyuan_id) {
        this.renyuan_id = renyuan_id;
    }

    @Override
    public String toString() {
        return "RenYuan{" +
                "id=" + id +
                ", renyuan_id='" + renyuan_id + '\'' +
                ", B='" + B + '\'' +
                ", C='" + C + '\'' +
                ", D='" + D + '\'' +
                ", E='" + E + '\'' +
                '}';
    }
}
