<?php

class SendingEmail
{

    public $receiver_email;

    public $notification_log_name;
    public $notification_log_email;
    public $notification_log_phone;
    public $notification_log_message;
    public $notification_log_receiver;
    public $notification_log_created;

    public $connection;
    public $lastInsertedId;

    public $tblReceiver;
    public $tblLog;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReceiver = "dcchv1_notification_receiver";
        $this->tblLog = "dcchv1_notification_log";
    }

    public function readAllEmail()
    {
        try {
            $sql = "select receiver_email ";
            $sql .= "from ";
            $sql .= "{$this->tblReceiver} ";
            $sql .= "order by receiver_email ";
            $query = $this->connection->prepare($sql);
            $query->execute();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function create()
    {
        try {
            $sql = "insert into {$this->tblLog} ";
            $sql .= "(notification_log_name, ";
            $sql .= "notification_log_email, ";
            $sql .= "notification_log_phone, ";
            $sql .= "notification_log_message, ";
            $sql .= "notification_log_receiver, ";
            $sql .= "notification_log_created ) values ( ";
            $sql .= ":notification_log_name, ";
            $sql .= ":notification_log_email, ";
            $sql .= ":notification_log_phone, ";
            $sql .= ":notification_log_message, ";
            $sql .= ":notification_log_receiver, ";
            $sql .= ":notification_log_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_log_name" => $this->notification_log_name,
                "notification_log_email" => $this->notification_log_email,
                "notification_log_phone" => $this->notification_log_phone,
                "notification_log_message" => $this->notification_log_message,
                "notification_log_receiver" => $this->notification_log_receiver,
                "notification_log_created" => $this->notification_log_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
