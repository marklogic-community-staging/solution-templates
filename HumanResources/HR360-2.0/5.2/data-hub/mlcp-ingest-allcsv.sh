i = 0
for i in {0..1}
do
sh ./scripts/proc-${i}.sh
done
echo "Ingest All CSV Completed"
exit