#!/usr/bin/bash
mkdir ./docs 

TEMPLATE='/templates/jsdoc3Template/'     # Template directory real JSDOC_DIR/templates/$TEMPLATE
OUTPUT_DIR='/docs/'       # HTML output dir, you must create before launch this. JSDOC_DIR/$OUTPUT_DIR
INPUT_DIR='/src/'         # JS sources. You must put a package.json in directory PROJECTNAME 
ORIGINAL_SOURCE="'"\"/home/crimsonvirtuoso/Documents/Programming/YouTubers/Traversy Media/jsdoc_example\""'" # Be careful the sources placed in INPUT_DIR they will be destroyed

function timer() # Only a Time elapsed calculate function 
{
	if [[ $# -eq 0 ]]; then
		echo $(date '+%s')
	else
		local  stime=$1
		etime=$(date '+%s')

		if [[ -z "$stime" ]]; then stime=$etime; fi

		dt=$((etime - stime))
		ds=$((dt % 60))
		dm=$(((dt / 60) % 60))
		dh=$((dt / 3600))
		printf '%d:%02d:%02d' $dh $dm $ds
	fi
}
t=$(timer)

echo -l 'Erasing old documentation'
rm -r .$OUTPUT_DIR*
echo '         Done!'

echo 'Erasing Old Sources'
rm -r .$INPUT_DIR*
echo '         Done!'
echo 'Coping new Sources'
cp -rf $ORIGINAL_SOURCE* ./$INPUT_DIR
echo 'Cleaning .svn and .git folders'
rm -rf `find ./$INPUT_DIR -type d -name .svn`
rm -rf `find ./$INPUT_DIR -type d -name .git`
echo '         Done!'


echo -l 'JSDOC!'
./jsdoc -t templates/$TEMPLATE -d .$OUTPUT_DIR -r .$INPUT_DIR

echo '         Done!'
echo -l ''
echo -l 'Time Elapsed: ' $(timer $t)
