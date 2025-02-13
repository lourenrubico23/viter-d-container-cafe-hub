<?php

class Receiver
{
    public $receiver_aid;
    public $receiver_is_active;
    public $receiver_name;
    public $receiver_email;
    public $receiver_phone_no;
    public $receiver_created;
    public $receiver_datetime;

    public $connection;
    public $lastInsertedId;

    public $receiver_start;
    public $receiver_total;
    public $receiver_search;

    public $tblReceiver;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReceiver = "dcchv1_notification_receiver";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblReceiver} ";
            $sql .= "order by receiver_is_active desc, ";
            $sql .= "receiver_name asc ";
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
            $sql .= "{$this->tblReceiver} ";
            $sql .= "order by receiver_is_active desc, ";
            $sql .= "receiver_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->receiver_start - 1,
                "total" => $this->receiver_total,
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
            $sql .= "from {$this->tblReceiver} ";
            $sql .= "where ( ";
            $sql .= "receiver_name like :receiver_name ";
            $sql .= "or receiver_email like :receiver_email ";
            $sql .= "or receiver_phone_no like :receiver_phone_no ";
            $sql .= ") ";
            $sql .= "order by receiver_is_active desc, ";
            $sql .= "receiver_name asc, ";
            $sql .= "receiver_phone_no asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "receiver_name" => "%{$this->receiver_search}%",
                "receiver_email" => "%{$this->receiver_search}%",
                "receiver_phone_no" => "%{$this->receiver_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblReceiver}";
            $sql .= "(receiver_is_active, ";
            $sql .= "receiver_name, ";
            $sql .= "receiver_email, ";
            $sql .= "receiver_phone_no, ";
            $sql .= "receiver_created, ";
            $sql .= "receiver_datetime ) values ( ";
            $sql .= ":receiver_is_active, ";
            $sql .= ":receiver_name, ";
            $sql .= ":receiver_email, ";
            $sql .= ":receiver_phone_no, ";
            $sql .= ":receiver_created, ";
            $sql .= ":receiver_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "receiver_is_active" => $this->receiver_is_active,
                "receiver_name" => $this->receiver_name,
                "receiver_email" => $this->receiver_email,
                "receiver_phone_no" => $this->receiver_phone_no,
                "receiver_created" => $this->receiver_created,
                "receiver_datetime" => $this->receiver_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblReceiver} set ";
            $sql .= "receiver_name = :receiver_name, ";
            $sql .= "receiver_email = :receiver_email, ";
            $sql .= "receiver_phone_no = :receiver_phone_no, ";
            $sql .= "receiver_datetime = :receiver_datetime ";
            $sql .= "where receiver_aid = :receiver_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "receiver_name" => $this->receiver_name,
                "receiver_email" => $this->receiver_email,
                "receiver_phone_no" => $this->receiver_phone_no,
                "receiver_datetime" => $this->receiver_datetime,
                "receiver_aid" => $this->receiver_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblReceiver} ";
            $sql .= "where receiver_aid = :receiver_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "receiver_aid" => $this->receiver_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblReceiver} set ";
            $sql .= "receiver_is_active = :receiver_is_active, ";
            $sql .= "receiver_datetime = :receiver_datetime ";
            $sql .= "where receiver_aid = :receiver_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "receiver_is_active" => $this->receiver_is_active,
                "receiver_datetime" => $this->receiver_datetime,
                "receiver_aid" => $this->receiver_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblReceiver} ";
            $sql .= "where receiver_name = :receiver_name ";
            $sql .= "and receiver_email = :receiver_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "receiver_name" => $this->receiver_name,
                "receiver_email" => $this->receiver_email,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
