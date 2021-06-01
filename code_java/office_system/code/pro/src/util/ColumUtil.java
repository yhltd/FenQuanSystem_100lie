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

        List column = new ArrayList();

     //循环出大写的英文字母'A'~'Z'
        List<String> alphabet = new ArrayList<>();
        for(int i = 0;i<26;i++){
            alphabet.add(String.valueOf((char) (65+i)));
        }
        //大写英文字母'A'~'C'
        List list = new ArrayList();
          list.add('A');
          list.add('B');
          list.add('C');
          //双重循环得到'A'~'CZ'
        for (int i=0;i<list.size();i++){
            for (int j=0;j<alphabet.size();j++){
                column.add(list.get(i)+String.valueOf(alphabet.get(j)));

            }
        }
        List finalColum = new ArrayList();
//        List finalColumn = new ArrayList();
        finalColum.addAll(alphabet);
        finalColum.addAll(column);
//        for (int i=0;i<=1;i++){
//            finalColum.remove(0);
//        }
//        finalColumn.addAll(finalColum);
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
