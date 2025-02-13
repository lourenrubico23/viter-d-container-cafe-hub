<?php

class NotificationLog
{
    public $notification_log_aid;
    public $notification_log_name;
    public $notification_log_email;
    public $notification_log_phone;
    public $notification_log_message;
    public $notification_log_receiver;
    public $notification_log_created;

    public $connection;
    public $lastInsertedId;

    public $notification_log_start;
    public $notification_log_total;
    public $notification_log_search;

    public $tblLog;
    public $tblReceiver;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLog = "dcchv1_notification_log";
        $this->tblReceiver = "dcchv1_notification_receiver";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblLog} ";
            $sql .= "order by notification_log_created desc, ";
            $sql .= "notification_log_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readLimit()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblLog} ";
            $sql .= "order by notification_log_created desc, ";
            $sql .= "notification_log_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->notification_log_start - 1,
                "total" => $this->notification_log_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblLog} ";
            $sql .= "where ( ";
            $sql .= "notification_log_name like :notification_log_name ";
            $sql .= "or notification_log_email like :notification_log_email ";
            $sql .= "or notification_log_receiver like :notification_log_receiver ";
            $sql .= "or notification_log_phone like :notification_log_phone ";
            $sql .= "or DATE_FORMAT(notification_log_created, '%M %e, %Y') LIKE :notification_log_created ";
            $sql .= ") ";
            $sql .= "order by notification_log_created desc, ";
            $sql .= "notification_log_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_log_name" => "%{$this->notification_log_search}%",
                "notification_log_email" => "%{$this->notification_log_search}%",
                "notification_log_receiver" => "%{$this->notification_log_search}%",
                "notification_log_phone" => "%{$this->notification_log_search}%",
                "notification_log_created" => "%{$this->notification_log_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
