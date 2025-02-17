<?php

class SendingEmail
{

    public $receiver_email;


    public $connection;
    public $lastInsertedId;

    public $tblReceiver;
  

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReceiver = "dcchv1_notification_receiver";
      
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


}
