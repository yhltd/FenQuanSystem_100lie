package com.fenquan.demo.controller;

import com.fenquan.demo.entity.Department;
import com.fenquan.demo.entity.SoftTime;
import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.service.IDepartmentService;
import com.fenquan.demo.service.IPersonPowerService;
import com.fenquan.demo.service.ISoftTimeService;
import com.fenquan.demo.service.IUserInfoService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;


@Slf4j
@RestController
@RequestMapping("/user")
public class UserInfoController{

    @Autowired
    IUserInfoService iUserInfoService;

    @Autowired
    ISoftTimeService iSoftTimeService;

    @Autowired
    IPersonPowerService iPersonPowerService;

    @Autowired
    IDepartmentService iDepartmentService;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private DataSource dataSource;

    //登录页面公司下拉查询
    @RequestMapping("/get_select_List")
    public ResultInfo queryList() {
        try {
            List<UserInfo> select_list = iUserInfoService.get_select_List();
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    //查询人员下拉列表
    @RequestMapping("/get_renyuan_List")
    public ResultInfo get_renyuan_List(HttpSession session) {
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<UserInfo> select_list = iUserInfoService.get_renyuan_List(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    //登录
    @RequestMapping("/login")
    public ResultInfo login(HttpSession session, String username, String password, String company) {
        try {
            String endtime = "";
            String mark1 = "";
            String mark2 = "";
            String mark3 = "";
            String mark4 = "";
            String mark5 = "";
            //获取user
            SessionUtil.remove(session, "token");
            List<SoftTime> softTime = iSoftTimeService.getList(company);
            if (softTime.size() == 0) {
                return ResultInfo.error(-1, "工具到期，请联系我公司续费。");
            }else{
                if(softTime.get(0).getEndtime() != null){
                    endtime = softTime.get(0).getEndtime().trim();
                }
                if(softTime.get(0).getMark1() != null){
                    mark1 = softTime.get(0).getMark1().trim();
                }
                if(softTime.get(0).getMark2() != null){
                    mark2 = softTime.get(0).getMark2().trim();
                }
                if(softTime.get(0).getMark3() != null){
                    mark3 = softTime.get(0).getMark3().trim();
                    if(mark3 != ""){
                        mark3 = mark3.split(":")[1];
                        mark3 = mark3.replace("(","");
                        mark3 = mark3.replace(")","");
                    }
                }
                if(softTime.get(0).getMark4() != null){
                    mark4 = softTime.get(0).getMark4().trim();
                }
                if(softTime.get(0).getMark5() != null){
                    mark5 = softTime.get(0).getMark5().trim();
                }

                if(!mark5.contains("PC端")) {
                    return ResultInfo.error(-1, "您没有当前使用端权限，请联系我公司续费或者购买系统");
                }

                SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
                if(!mark1.equals("a8xd2s")){
                    if(endtime == ""){
                        return ResultInfo.error(-1, "工具到期，请联系我公司续费");
                    }
                    if(mark2 == ""){
                        return ResultInfo.error(-1, "服务器到期，请联系我公司续费");
                    }
                    Date enddate = sdf.parse(endtime);
                    Date fuwudate = sdf.parse(mark2);
                    Date now = new Date();
                    String this_time = sdf.format(now);
                    now = sdf.parse(this_time);
                    if(now.getTime() > enddate.getTime()){
                        return ResultInfo.error(-1, "工具到期，请联系我公司续费");
                    }
                    if(now.getTime() > fuwudate.getTime()){
                        return ResultInfo.error(-1, "服务器到期，请联系我公司续费");
                    }
                }
//
            }
            Map<String, Object> map = iUserInfoService.login(username, password, company);
            //为Null则查询不到
            if (StringUtils.isEmpty(map)) {
                SessionUtil.remove(session, "token");
                return ResultInfo.error(-1, "用户名密码错误或账号被锁定");
            } else {
                String companyName = company;
                log.info("使用传入的company参数: {}", companyName);
                session.setAttribute("companyName", companyName);
                String sessionCompany = (String) session.getAttribute("companyName");
                log.info("设置到session后的值: {}", sessionCompany);

                SessionUtil.setToken(session, map.get("token").toString());
                SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
                SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
                SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
                SessionUtil.setUserNum(session, StringUtils.cast(mark3));
                SessionUtil.setStorageSpace(session, mark4);
                String token = SessionUtil.getToken(session);
                String[] token_list = token.split(",");
                token_list = token_list[1].split("\"");
                String login_company = token_list[3];

                Map<String, Object> resultData = new HashMap<>();
                resultData.put("userNum", mark3);           // 账号数量限制
                resultData.put("storageSpace", mark4);      // 存储空间限制

                return ResultInfo.success("登陆成功", resultData);
            }
        } catch (Exception e) {
            log.error("登陆失败：{}", e.getMessage());
            log.error("参数：{}", username);
            log.error("参数：{}", password);
            return ResultInfo.error("错误!");
        }
    }

    /*
     *人员信息页面刷新
     * */
    @RequestMapping("/queryC")
    public ResultInfo queryC(HttpSession session){
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("人员管理")) {
            return ResultInfo.error(401, "无权限");
        }
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String login_company = token_list[3];
        try {
            List<UserInfo> queryC=iUserInfoService.queryC(login_company);
            return ResultInfo.success("查询成功!",queryC);
        }catch (Exception e){
            log.error("查询失败：{}",e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /*
     *人员信息页面条件查询
     * */
    @RequestMapping("/queryC_Inquire")
    public ResultInfo queryC_Inquire(HttpSession session,String query){
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("人员管理")) {
            return ResultInfo.error(401, "无权限");
        }
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String login_company = token_list[3];
        try {
            List<UserInfo> queryC_Inquire=iUserInfoService.queryC_Inquire(login_company,query);
            return ResultInfo.success("查询成功!",queryC_Inquire);
        }catch (Exception e){
            log.error("查询失败：{}",e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    /*
     *添加
     * */
    @RequestMapping("/add")
    public ResultInfo add(String add_C,String add_D,String add_E,String add_zhuangtai,String add_email,String add_phone,String add_bianhao,String add_bumen,String add_wenjian,String chashanquanxian ,HttpSession session){
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isAdd("人员管理")) {
            return ResultInfo.error(401, "无权限");
        }
//        Random ran = new Random(System.currentTimeMillis());
//        ran.nextLong();

        DateTimeFormatter fmt= DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");
        String newsNo= LocalDateTime.now().format(fmt);
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String login_company = token_list[3];
        String userNum = SessionUtil.getUserNum(session);
        if(userNum != ""){
            int num = Integer.parseInt(userNum);
            List<UserInfo> NumList = iUserInfoService.getUserNum(login_company);
            int thisNum = NumList.get(0).getId();
            if(thisNum >= num){
                return ResultInfo.error("已有账号数量过多，请删除无用账号后再试", null);
            }
        }
        UserInfo iuser = new UserInfo();
        try{
            iuser.setB(login_company);
            iuser.setC(add_C);
            iuser.setD(add_D);
            iuser.setE(add_E);
            iuser.setRenyuanId(newsNo);
            iuser.setZhuangtai(add_zhuangtai);
            iuser.setBianhao(add_bianhao);
            iuser.setEmail(add_email);
            iuser.setPhone(add_phone);
            iuser.setBumen(add_bumen);
            iuser.setWenjian(add_wenjian);
            String a= "查询";
            String b= "修改";
            iuser = iUserInfoService.add(iuser);
            if (StringUtils.isNotNull(iuser) && iUserInfoService.addcopy(login_company,add_C,newsNo,a)&& iUserInfoService.addcopy(login_company,add_C,newsNo,b)) {
                return ResultInfo.success("添加成功", iuser);
            } else {
                return ResultInfo.error("添加失败", null);
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error("添加失败：{}", e.getMessage());
            return ResultInfo.error("添加失败");
        }
    }




    /*
     *修改
     * */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultInfo update(@RequestBody String menuSettingsJson ,HttpSession session){
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isUpdate("人员管理")) {
            return ResultInfo.error(401, "无权限");
        }
        try{
            userInfo = DecodeUtil.decodeToJson(menuSettingsJson, UserInfo.class);
            if (iUserInfoService.update(userInfo)) {
                return ResultInfo.success("修改成功", userInfo);
            } else {
                return ResultInfo.success("修改失败", userInfo);
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            return ResultInfo.error("修改失败");
        }
    }


    /*
     *删除
     * */
    @RequestMapping("/delete")
    public ResultInfo delete(HttpSession session,String renyuan_id){
//        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
       //List<Integer> renyuan_id = GsonUtil.toList(gsonUtil.get("renyuan_id"), Integer.class);
//        List<Integer> quanxianList = GsonUtil.toList(gsonUtil.get("quanxianList"), Integer.class);
        try{
            if (iUserInfoService.delete(renyuan_id) && iUserInfoService.deletecopy(renyuan_id)) {
                return ResultInfo.success("删除成功", renyuan_id);
            } else {
                return ResultInfo.success("删除失败", renyuan_id);
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error("删除失败：{}", e.getMessage());
            return ResultInfo.error("删除失败");
        }
    }

    /*
     *列表部门查询
     * */
    @RequestMapping("/querbumen")
    public ResultInfo querbumen(HttpSession session){
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String login_company = token_list[3];
        try {
            List<Department> querbumen=iDepartmentService.querbumen(login_company);
            return ResultInfo.success("查询成功!",querbumen);
        }catch (Exception e){
            log.error("查询失败：{}",e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @PostMapping("/updatewenjian")
    public ResultInfo updateWenjian(@RequestParam("up_id") Integer up_id,
                                    @RequestParam("up_wenjian") String up_wenjian) {
        try {
            boolean success = iUserInfoService.updateWenjian(up_wenjian, up_id);
            if (success) {
                return ResultInfo.success("文件信息更新成功");
            } else {
                return ResultInfo.error("文件信息更新失败");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResultInfo.error("系统错误：" + e.getMessage());
        }
    }

    /**
     * 表名与公司字段名的映射关系
     */
    private Map<String, String> getCompanyColumnMap() {
        Map<String, String> map = new HashMap<>();
        map.put("baitaoquanxian", "公司");           // 假设这个表的公司字段是 company
        map.put("baitaoquanxian_gongsi", "B"); // 假设这个表的公司字段是 company_name
        map.put("baitaoquanxian_department", "company");  // 假设这个表的公司字段是 company
        map.put("baitaoquanxian_copy1", "quanxian");        // 假设这个表的公司字段是 gongsi
        map.put("baitaoquanxian_renyun", "B");      // 假设这个表的公司字段是 company
        map.put("baitaoquanxian_copy2", "公司");              // 假设这个表的公司字段是 c
        map.put("baitaoquanxian_jisuan", "company");  // 假设这个表的公司字段是 company_name
        return map;
    }

    /**
     * 获取指定公司所有表的数据大小（支持不同表的不同公司字段名）
     */
    @GetMapping("/getCompanyTableSizes")
    public ResultInfo getCompanyTableSizes(@RequestParam String companyName) {
        try {
            String[] tableNames = {
                    "baitaoquanxian", "baitaoquanxian_gongsi", "baitaoquanxian_department",
                    "baitaoquanxian_copy1", "baitaoquanxian_renyun", "baitaoquanxian_copy2",
                    "baitaoquanxian_jisuan"
            };

            // 获取字段映射
            Map<String, String> columnMap = getCompanyColumnMap();

            List<Map<String, Object>> tableSizes = new ArrayList<>();
            long totalSizeKB = 0;

            for (String tableName : tableNames) {
                Map<String, Object> tableInfo = new HashMap<>();
                tableInfo.put("tableName", tableName);

                try {
                    // 获取该表的公司字段名
                    String companyColumn = columnMap.get(tableName);
                    if (companyColumn == null) {
                        log.warn("表 {} 未配置公司字段映射", tableName);
                        tableInfo.put("error", "未配置公司字段映射");
                        tableSizes.add(tableInfo);
                        continue;
                    }

                    // 获取该公司在该表中的数据大小
                    Map<String, Object> companyData = getCompanyTableData(tableName, companyColumn, companyName);
                    long sizeKB = (Long) companyData.get("sizeKB");
                    long rowCount = (Long) companyData.get("rowCount");

                    tableInfo.put("companyColumn", companyColumn);
                    tableInfo.put("sizeKB", sizeKB);
                    tableInfo.put("sizeMB", sizeKB / 1024.0);
                    tableInfo.put("sizeFormatted", formatSize(sizeKB * 1024));
                    tableInfo.put("rows", rowCount);

                    totalSizeKB += sizeKB;

                } catch (Exception e) {
                    log.warn("获取表 {} 数据大小失败: {}", tableName, e.getMessage());
                    tableInfo.put("error", e.getMessage());
                }

                tableSizes.add(tableInfo);
            }

            Map<String, Object> result = new HashMap<>();
            result.put("companyName", companyName);
            result.put("tables", tableSizes);
            result.put("totalSizeKB", totalSizeKB);
            result.put("totalSizeMB", totalSizeKB / 1024.0);
            result.put("totalSizeGB", totalSizeKB / (1024.0 * 1024));
            result.put("totalSizeFormatted", formatSize(totalSizeKB * 1024));

            return ResultInfo.success("获取成功", result);

        } catch (Exception e) {
            log.error("获取公司数据大小失败", e);
            return ResultInfo.error("获取失败: " + e.getMessage());
        }
    }

    /**
     * 获取表中某个公司的数据大小（支持动态字段名）
     */
    private Map<String, Object> getCompanyTableData(String tableName, String companyColumn, String companyName) {
        Map<String, Object> resultMap = new HashMap<>();

        try {
            // 动态构建 SQL，使用传入的字段名
            String sql = "SELECT " +
                    "    COUNT(*) AS row_count, " +
                    "    ISNULL(ROUND(SUM(DATALENGTH(ISNULL(CAST(" + companyColumn + " AS NVARCHAR(MAX)), ''))) / 1024.0, 2), 0) AS data_size_kb " +
                    "FROM " + tableName + " " +
                    "WHERE " + companyColumn + " = ?";

            Map<String, Object> result = jdbcTemplate.queryForMap(sql, companyName);

            long rowCount = ((Number) result.get("row_count")).longValue();
            long sizeKB = 0;
            Object sizeObj = result.get("data_size_kb");
            if (sizeObj != null) {
                sizeKB = ((Number) sizeObj).longValue();
            }

            resultMap.put("sizeKB", sizeKB);
            resultMap.put("rowCount", rowCount);

        } catch (Exception e) {
            log.error("获取公司数据失败: {} - {} - {}", tableName, companyColumn, companyName, e);
            resultMap.put("sizeKB", 0L);
            resultMap.put("rowCount", 0L);
        }

        return resultMap;
    }

    /**
     * 格式化大小
     */
    private String formatSize(long size) {
        if (size <= 0) return "0 B";

        String[] units = {"B", "KB", "MB", "GB", "TB"};
        int digitGroups = (int) (Math.log10(size) / Math.log10(1024));
        return String.format("%.2f %s", size / Math.pow(1024, digitGroups), units[digitGroups]);
    }
}
