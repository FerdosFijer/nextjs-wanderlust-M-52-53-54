"use client";
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { IoTrashBin } from 'react-icons/io5';

const BookingCancelAlert = ({bookingId}) => {
    console.log(bookingId);
    

    const handleCancleBooking = async () =>{
        const res = await fetch (`http://localhost:5000/booking/${bookingId}`,{
                    method:'DELETE',
                    headers: {"content-type": "application/json"} })
        const data = await res.json();
        console.log(data);
        
    }
    return (
    <AlertDialog>
      <Button variant="outline" className={'text-red-600 rounded-none '}> <IoTrashBin/>Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel project ?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancleBooking}  slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default BookingCancelAlert;