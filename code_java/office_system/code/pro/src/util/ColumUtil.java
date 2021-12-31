package util;

import java.util.ArrayList;
import java.util.List;

public class ColumUtil {
    //前端传过来的列加2得到数据库中对应的列
    public String getAlphabet(String alphabet) {
        //循环出大写的英文字母'A'~'Z'
        List<String> Alphabet = new ArrayList<>();
        List DoubleAlphabet = new ArrayList<>();
        String newAlphabet = alphabet;
        for (int i = 0; i < 26; i++) {
            Alphabet.add(String.valueOf((char) (65+i))) ;
        }
        //大写英文字母'A'~'C'
        List list = new ArrayList<>();
        list.add('A');
        list.add('B');
        list.add('C');
        //双重循环
        for(int i = 0;i<list.size();i++) {
            for(int j = 0;j<Alphabet.size();j++) {
                DoubleAlphabet.add(list.get(i)+String.valueOf(Alphabet.get(j)));
            }
        }
//		 System.out.println(DoubleAlphabet);
        //生成最终的List集合
        List<String> all = new ArrayList<>();
        all.addAll(Alphabet);
        all.addAll(DoubleAlphabet);
        int index =  all.indexOf(newAlphabet);
        int dex = index+2;
        String arrange = all.get(dex);
//        System.out.println(arrange);
        return arrange;
    }

    //得到从C到CX的所有列
    public List getColumn(){

//        List column = new ArrayList();
//
//        //循环出大写的英文字母'A'~'Z'
//        List<String> alphabet = new ArrayList<>();
//        for(int i = 0;i<26;i++){
//            alphabet.add(String.valueOf((char) (65+i)));
//        }
//        //大写英文字母'A'~'C'
//        List list = new ArrayList();
//          list.add('A');
//          list.add('B');
//          list.add('C');
//          //双重循环得到'A'~'CZ'
//        for (int i=0;i<list.size();i++){
//            for (int j=0;j<alphabet.size();j++){
//                column.add(list.get(i)+String.valueOf(alphabet.get(j)));
//
//            }
//        }
//        List finalColum = new ArrayList();
//
//        finalColum.addAll(alphabet);
//        finalColum.addAll(column);
        List<String> finalColum= new ArrayList<String>() {
            {
                this.add("A");
                this.add("B");
                this.add("C");
                this.add("D");
                this.add("E");
                this.add("F");
                this.add("G");
                this.add("H");
                this.add("I");
                this.add("J");
                this.add("K");
                this.add("L");
                this.add("M");
                this.add("N");
                this.add("O");
                this.add("P");
                this.add("Q");
                this.add("R");
                this.add("S");
                this.add("T");
                this.add("U");
                this.add("V");
                this.add("W");
                this.add("X");
                this.add("Y");
                this.add("Z");
                this.add("AA");
                this.add("AB");
                this.add("AC");
                this.add("AD");
                this.add("AE");
                this.add("AF");
                this.add("AG");
                this.add("AH");
                this.add("AI");
                this.add("AJ");
                this.add("AK");
                this.add("AL");
                this.add("AM");
                this.add("AN");
                this.add("AO");
                this.add("AP");
                this.add("AQ");
                this.add("AR");
                this.add("ASS");
                this.add("AT");
                this.add("AU");
                this.add("AV");
                this.add("AW");
                this.add("AX");
                this.add("AY");
                this.add("AZ");
                this.add("BA");
                this.add("BB");
                this.add("BC");
                this.add("BD");
                this.add("BE");
                this.add("BF");
                this.add("BG");
                this.add("BH");
                this.add("BI");
                this.add("BJ");
                this.add("BK");
                this.add("BL");
                this.add("BM");
                this.add("BN");
                this.add("BO");
                this.add("BP");
                this.add("BQ");
                this.add("BR");
                this.add("BS");
                this.add("BT");
                this.add("BU");
                this.add("BV");
                this.add("BW");
                this.add("BX");
                this.add("BYY");
                this.add("BZ");
                this.add("CA");
                this.add("CB");
                this.add("CC");
                this.add("CD");
                this.add("CE");
                this.add("CF");
                this.add("CG");
                this.add("CH");
                this.add("CI");
                this.add("CJ");
                this.add("CK");
                this.add("CL");
                this.add("CM");
                this.add("CN");
                this.add("CO");
                this.add("CP");
                this.add("CQ");
                this.add("CR");
                this.add("CS");
                this.add("CT");
                this.add("CU");
                this.add("CV");
            }
        };

        return finalColum;
    }
    //传过来的列减2
    public String getNewColumn(String newColumn){

        //循环出大写的英文字母'A'~'Z'
        List<String> Alphabet = new ArrayList<>();
        List DoubleAlphabet = new ArrayList<>();
        String newAlphabet = newColumn;
        for (int i = 0; i < 26; i++) {
            Alphabet.add(String.valueOf((char) (65+i))) ;
        }
        //大写英文字母'A'~'C'
        List list = new ArrayList<>();
        list.add('A');
        list.add('B');
        list.add('C');
        //双重循环
        for(int i = 0;i<list.size();i++) {
            for(int j = 0;j<Alphabet.size();j++) {
                DoubleAlphabet.add(list.get(i)+String.valueOf(Alphabet.get(j)));
            }
        }
//		 System.out.println(DoubleAlphabet);
        //生成最终的List集合
        List<String> all = new ArrayList<>();
        all.addAll(Alphabet);
        all.addAll(DoubleAlphabet);
        int index =  all.indexOf(newAlphabet);
        int dex = index-2;
        String arrange = all.get(dex);
        return arrange;
    }


}
