package com.priyanga.appdevelopment.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employee_notification")
public class EmployeeNotification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int empnoti_id;
    @Column(name ="employee_id" , nullable = false)
    private int employee_id;
    @Column(name ="efrom" , nullable = false , length = 50)
    private String efrom;
    @Column(name ="etype" , nullable = false , length = 50)
    private String etype;
    @Column(name ="edesc" , nullable = false , length = 100)
    private String edesc;
    @Column(name ="senttime" , nullable = false)
    private String senttime;

    public EmployeeNotification() {
    }

    public EmployeeNotification(int empnoti_id, int employee_id, String efrom, String etype, String edesc, String senttime) {
        super();
        this.empnoti_id = empnoti_id;
        this.employee_id = employee_id;
        this.efrom = efrom;
        this.etype = etype;
        this.edesc = edesc;
        this.senttime = senttime;
    }

    public int getEmpnoti_id() {
        return empnoti_id;
    }

    public void setEmpnoti_id(int empnoti_id) {
        this.empnoti_id = empnoti_id;
    }

    public String getEfrom() {
        return efrom;
    }

    public void setEfrom(String efrom) {
        this.efrom = efrom;
    }

    public String getEtype() {
        return etype;
    }

    public void setEtype(String etype) {
        this.etype = etype;
    }

    public String getEdesc() {
        return edesc;
    }

    public void setEdesc(String edesc) {
        this.edesc = edesc;
    }

    public String getSenttime() {
        return senttime;
    }

    public void setSenttime(String senttime) {
        this.senttime = senttime;
    }

    public int getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(int employee_id) {
        this.employee_id = employee_id;
    }
}
