function TrackRecord() {
  return (
    <div className="bg-background text-foreground p-8 text-center min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">OUR TRACK RECORD</h2>
      <p className="text-lg mb-6">
        BDI CAPITAL HAS SUCCESSFULLY CLOSED{" "}
        <span className="font-semibold">$107.5 MILLION</span> IN FUNDRAISING
        TRANSACTIONS FOR ITS CLIENTS.
      </p>
      <div className="flex justify-around">
        <div className="text-center">
          <span className="text-4xl font-bold">$65.6 M</span>
          <p className="text-muted-foreground">EQUITY CAPITAL RAISED</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold">$42 M</span>
          <p className="text-muted-foreground">DEBT CAPITAL RAISED</p>
        </div>
      </div>
    </div>
  );
}

export default TrackRecord;
