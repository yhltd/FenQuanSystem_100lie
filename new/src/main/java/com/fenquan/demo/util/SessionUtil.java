
package com.fenquan.demo.util;

import com.fenquan.demo.entity.CompanyPower;
import com.fenquan.demo.entity.Department;
import com.fenquan.demo.entity.PersonPower;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Session工具类
 *
 * @author dai
 */
@Component
public class SessionUtil {

    //session过期时间（秒）
    private static final Integer MAX_INTERVAL = 7200;

    /**
     * 检查token
     *
     * @return 是否过期
     */
    public static boolean checkToken(HttpSession session) {
        Object token = session.getAttribute("token");
        Object power = session.getAttribute("power");
        return StringUtils.isNotNull(token);
        //return StringUtils.isNotNull(token);
    }

    /**
     * set
     * @param session session对象
     * @param data 需要设置的值
     */
    public static void setToken(HttpSession session, String data) {
        //设置session过期时间
        session.setMaxInactiveInterval(MAX_INTERVAL);
        session.setAttribute("token", data);
    }

    public static void setPower(HttpSession session, List<Department> userPower){
        //设置session过期时间
        session.setMaxInactiveInterval(MAX_INTERVAL);
        session.setAttribute("power", userPower);
    }

    public static void setGongSiPower(HttpSession session, List<CompanyPower> companyPower){
        //设置session过期时间
        session.setMaxInactiveInterval(MAX_INTERVAL);
        session.setAttribute("companyPower", companyPower);
    }

    public static void setRenYuanPower(HttpSession session, List<PersonPower> personPower){
        //设置session过期时间
        session.setMaxInactiveInterval(MAX_INTERVAL);
        session.setAttribute("personPower", personPower);
    }

    public static void setUserNum(HttpSession session, String data) {
        //设置session过期时间
        session.setMaxInactiveInterval(MAX_INTERVAL);
        session.setAttribute("userNum", data);
    }

    /**
     * get
     * @param session session对象
     * @return 获取data
     */
    public static String getToken(HttpSession session) {
//        return checkToken(session) ? session.getAttribute("token").toString() : StringUtils.EMPTY;
        return StringUtils.cast(session.getAttribute("token"));
    }

    public static List<Department> getPower(HttpSession session){
        return StringUtils.cast(session.getAttribute("power"));
    }

    public static List<CompanyPower> getGongSiPower(HttpSession session){
        return StringUtils.cast(session.getAttribute("companyPower"));
    }

    public static List<PersonPower> getRenYuanPower(HttpSession session){
        return StringUtils.cast(session.getAttribute("personPower"));
    }

    public static String getUserNum(HttpSession session){
        return StringUtils.cast(session.getAttribute("userNum"));
    }

    /**
     * 删除某个键
     * @param session
     * @param key
     */
    public static void remove(HttpSession session, String key) {
        session.removeAttribute(key);
    }

}