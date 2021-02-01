package dao;

public class JsonReader {
    private String id;
    private String newvalue;
    private String column;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNewvalue() {
        return newvalue;
    }

    public void setNewvalue(String newvalue) {
        this.newvalue = newvalue;
    }

    public String getColumn() {
        return column;
    }

    public void setColumn(String column) {
        this.column = column;
    }

    @Override
    public String toString() {
        return "JsonReader{" +
                "id='" + id + '\'' +
                ", newvalue='" + newvalue + '\'' +
                ", column='" + column + '\'' +
                '}';
    }
}
