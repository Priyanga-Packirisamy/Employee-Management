package com.priyanga.appdevelopment.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "meeting")
public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int meeting_id;
    @Column(name ="dept_id" , nullable = false)
    private int dept_id;
    @Column(name ="meeting_date" , nullable = false)
    private String meeting_date;
    @Column(name ="meeting_title" , nullable = false , length = 50)
    private String meeting_title;
    @Column(name ="start_time" , nullable = false)
    private String start_time;
    @Column(name ="end_time" , nullable = false)
    private String end_time;
    @Column(name ="manager_name" , nullable = false , length = 50)
    private String manager_name;
    @Column(name ="meet_link" , nullable = false , length = 100)
    private String meet_link;

    public Meeting() {
    }

    public Meeting(int meeting_id,int dept_id ,String meeting_date, String meeting_title, String start_time, String end_time, String manager_name, String meet_link) {
        super();
        this.meeting_id = meeting_id;
        this.dept_id = dept_id;
        this.meeting_date = meeting_date;
        this.meeting_title = meeting_title;
        this.start_time = start_time;
        this.end_time = end_time;
        this.manager_name = manager_name;
        this.meet_link = meet_link;
    }

    public int getMeeting_id() {
        return meeting_id;
    }

    public void setMeeting_id(int meeting_id) {
        this.meeting_id = meeting_id;
    }

    public String getMeeting_date() {
        return meeting_date;
    }

    public void setMeeting_no(String meeting_date) {
        this.meeting_date = meeting_date;
    }

    public String getMeeting_title() {
        return meeting_title;
    }

    public void setMeeting_title(String meeting_title) {
        this.meeting_title = meeting_title;
    }

    public String getStart_time() {
        return start_time;
    }

    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }

    public String getEnd_time() {
        return end_time;
    }

    public void setEnd_time(String end_time) {
        this.end_time = end_time;
    }

    public String getManager_name() {
        return manager_name;
    }

    public void setManager_name(String manager_name) {
        this.manager_name = manager_name;
    }

    public String getMeet_link() {
        return meet_link;
    }

    public void setMeet_link(String meet_link) {
        this.meet_link = meet_link;
    }

    public int getDept_id() {
        return dept_id;
    }

    public void setDept_id(int dept_id) {
        this.dept_id = dept_id;
    }
}
