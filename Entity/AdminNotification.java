package com.priyanga.appdevelopment.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "admin_notification")
public class AdminNotification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int anoti_id;
    @Column(name ="afrom" , nullable = false , length = 50)
    private String afrom;
    @Column(name ="atype" , nullable = false , length = 50)
    private String atype;
    @Column(name ="adesc" , nullable = false , length = 255)
    private String adesc;
    @Column(name ="senttime" , nullable = false)
    private String senttime;
    @Column(name ="action")
    private String aaction;

    public AdminNotification() {

    }

    public AdminNotification(int anoti_id, String afrom, String atype, String adesc, String senttime, String aaction) {
        super();
        this.anoti_id = anoti_id;
        this.afrom = afrom;
        this.atype = atype;
        this.adesc = adesc;
        this.senttime = senttime;
        this.aaction = aaction;
    }

    public int getAnoti_id() {
        return anoti_id;
    }

    public void setAnoti_id(int anoti_id) {
        this.anoti_id = anoti_id;
    }

    public String getAfrom() {
        return afrom;
    }

    public void setAfrom(String afrom) {
        this.afrom = afrom;
    }

    public String getAtype() {
        return atype;
    }

    public void setAtype(String atype) {
        this.atype = atype;
    }

    public String getAdesc() {
        return adesc;
    }

    public void setAdesc(String adesc) {
        this.adesc = adesc;
    }

    public String getSenttime() {
        return senttime;
    }

    public void setSenttime(String senttime) {
        this.senttime = senttime;
    }

    public String getAaction() {
        return aaction;
    }

    public void setAaction(String aaction) {
        this.aaction = aaction;
    }
}
