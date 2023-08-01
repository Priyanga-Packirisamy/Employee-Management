package com.priyanga.appdevelopment.Entity;

import jakarta.persistence.*;

@Table
@Entity
public class Leaver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int leave_id;
    @Column(name ="employee_id" , nullable = false)
    private int employee_id;
    @Column(name ="emp_fname" , nullable = false , length = 50)
    private String emp_fname;
    @Column(name ="emp_lname" , nullable = false , length = 50)
    private String emp_lname;
    @Column(name ="manager_fname" , nullable = false , length = 50)
    private String manager_fname;
    @Column(name ="manager_lname" , nullable = false , length = 50)
    private String manager_lname;
    @Column(name = "ldept_name" , nullable = false , length = 50)
    private String ldept_name;
    @Column(name ="ldept_id" , nullable = false)
    private int ldept_id;
    @Column(name ="reason" , nullable = false , length = 50)
    private String reason;
    @Column(name ="manager_email" , nullable = false , length = 50)
    private String manager_email;
    @Column(name ="leave_from" , nullable = false)
    private String leave_from;
    @Column(name ="leave_to" , nullable = false)
    private String leave_to;
    @Column(name ="leave_status" , nullable = false , length = 50)
    private String leave_status;

    public Leaver() {
    }

    public Leaver(int leave_id,int employee_id, String emp_fname, String emp_lname, String manager_fname, String manager_lname, String ldept_name, int ldept_id, String reason, String manager_email, String leave_from, String leave_to, String leave_status) {
        super();
        this.leave_id = leave_id;
        this.employee_id = employee_id;
        this.emp_fname = emp_fname;
        this.emp_lname = emp_lname;
        this.manager_fname = manager_fname;
        this.manager_lname = manager_lname;
        this.ldept_name = ldept_name;
        this.ldept_id = ldept_id;
        this.reason = reason;
        this.manager_email = manager_email;
        this.leave_from = leave_from;
        this.leave_to = leave_to;
        this.leave_status = leave_status;
    }

    public int getLeave_id() {
        return leave_id;
    }

    public void setLeave_id(int leave_id) {
        this.leave_id = leave_id;
    }

    public String getEmp_fname() {
        return emp_fname;
    }

    public void setEmp_fname(String emp_fname) {
        this.emp_fname = emp_fname;
    }

    public String getEmp_lname() {
        return emp_lname;
    }

    public void setEmp_lname(String emp_lname) {
        this.emp_lname = emp_lname;
    }

    public String getManager_fname() {
        return manager_fname;
    }

    public void setManager_fname(String manager_fname) {
        this.manager_fname = manager_fname;
    }

    public String getManager_lname() {
        return manager_lname;
    }

    public void setManager_lname(String manager_lname) {
        this.manager_lname = manager_lname;
    }

    public String getLdept_name() {
        return ldept_name;
    }

    public void setLdept_name(String ldept_name) {
        this.ldept_name = ldept_name;
    }

    public int getLdept_id() {
        return ldept_id;
    }

    public void setLdept_id(int ldept_id) {
        this.ldept_id = ldept_id;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getManager_email() {
        return manager_email;
    }

    public void setManager_email(String manager_email) {
        this.manager_email = manager_email;
    }

    public String getLeave_from() {
        return leave_from;
    }

    public void setLeave_from(String leave_from) {
        this.leave_from = leave_from;
    }

    public String getLeave_to() {
        return leave_to;
    }

    public void setLeave_to(String leave_to) {
        this.leave_to = leave_to;
    }

    public String getLeave_status() {
        return leave_status;
    }

    public void setLeave_status(String leave_status) {
        this.leave_status = leave_status;
    }

    public int getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(int employee_id) {
        this.employee_id = employee_id;
    }
}
