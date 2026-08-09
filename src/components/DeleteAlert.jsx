"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { IoTrashBin } from "react-icons/io5";

export function DeleteAlert({destination}) {
    const {_id, imageUrl, destinationName, country, category, price, duration, description, departureDate} =destination;

    const handleDelete = async () => {
        const res = await fetch (`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method:'DELETE'
        })
        const data = await res.json();
        redirect('/destinations')
        console.log(data);
    }
  return (
    <AlertDialog>
      <Button variant="outline" className={'text-red-600 rounded-none '}> <IoTrashBin/>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}